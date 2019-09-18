import {Request} from "../constructor/request";
import * as chai from "chai";
import {Schemas} from "./schemas/schemas";
import {Creds} from "../constructor/creds";
chai.use(require("chai-json-schema-ajv"));
const expect = chai.expect;

let today = new Date ();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let newBoardId: string;
let boardId: string;
let newListId: string;
let newCardId: string;
let listIdForDone: string;

let schema = new Schemas;
let cred = new Creds;


describe("Test for TrelloApi", function() {
    it("Get opened boards", async function(){
        let openedBoard = await new Request(`${cred.baseUrl}1/Members/andreymelnichenko3?boards=open&key=${cred.key}&token=${cred.token}`)
        .method('GET')
        .send();
        expect(openedBoard.statusCode).to.equals(200);
        expect(openedBoard.body).to.be.jsonSchema(schema.mainOpenBoardSchema);
        console.log(JSON.stringify(openedBoard.body));
        
    })

    xit("Create board", async function(){
        let createBoardByName = await new Request(`${cred.baseUrl}1/boards/?key=${cred.key}&token=${cred.token}`)
            .method('POST')
            .body({name: "TrelloIgorApi_" + time})
            .send();
            newBoardId = `${createBoardByName.body.id}` // board id will be needed for manipulation on the board
            expect(createBoardByName.statusCode).to.equals(200);
            expect(createBoardByName.body).to.have.property('id');
            expect(createBoardByName).to.be.jsonSchema(schema.boardSchema);            
    })

    xit("Get all lists in new board and get id for done list", async function(){
        let getBoardById = await new Request(`${cred.baseUrl}1/boards/${newBoardId}/lists?key=${cred.key}&token=${cred.token}`)
            .method('GET')
            .send();            
            expect(getBoardById.statusCode).to.equals(200);
            var jsonData = getBoardById.body; //all list id in the created
            jsonData.forEach(function(item){
                console.log(item);
                if (item.name === "Done") {
                    listIdForDone = item.id; //get id for list "Done"
                } 

                })
            })                       
             
    // Test for creation of new list
    xit("Create list in a new board", async function(){
        let createNewList = await new Request(`${cred.baseUrl}1/lists/?key=${cred.key}&token=${cred.token}`)
            .method('POST')
            .body({name: "List " + time,
                   idBoard: newBoardId})
            .send();
            newListId = `${createNewList.body.id}`; // ID will be needed in creation of the card
            expect(createNewList.statusCode).to.equals(200);
            expect(createNewList.body).to.have.property('id');
            expect(createNewList).to.be.jsonSchema(schema.listSchema);
    })

    // Test will create a new list in the created board
    xit("Create a card in new list", async function(){
        let createNewCard = await new Request (`${cred.baseUrl}1/cards/?key=${cred.key}&token=${cred.token}`)
            .method('POST')
            .body({idList: newListId,
                    name: "Card " + time})
            .send();
            newCardId = `${createNewCard.body.id}`
            expect(createNewCard.body).to.have.property('idBoard');
            expect(createNewCard.body).to.have.property('idList');
            expect(createNewCard.statusCode).to.equals(200);
    })

    // Test will add a description and change name of the card
    xit("Edit created card", async function(){
        let editNewCard = await new Request (`${cred.baseUrl}1/cards/${newCardId}/?key=${cred.key}&token=${cred.token}`)
            .method('PUT')
            .body({name: "Card was edited see desc",
                    desc: "Was edited at " + time})
            .send();
            expect(editNewCard.statusCode).to.equals(200);
            expect(editNewCard.body).to.have.property('id');            
    })

    //Change column of created card
    xit("Move created card to done", async function(){
        let moveToDone = await new Request (`${cred.baseUrl}1/cards/${newCardId}/?key=${cred.key}&token=${cred.token}`)
            .method('PUT')
            .body({idList: listIdForDone})
            .send();
            expect(moveToDone.statusCode).to.equals(200);
    })

    //Test will delete a card from the list
    xit("Delete created card", async function(){
        let deleteCreatedCard = await new Request(`${cred.baseUrl}1/cards/${newCardId}/?key=${cred.key}&token=${cred.token}`)
            .method(`DELETE`)
            .send();
            expect(deleteCreatedCard.statusCode).to.equals(200);
            expect(deleteCreatedCard.body).not.have.property('id');
    })

    //Test will delete board. Comment a delete board test to see previous results on the UI
    xit("Delete board", async function(){
        let deleteCreatedBoard = await new Request(`${cred.baseUrl}1/boards/${newBoardId}/?key=${cred.key}&token=${cred.token}`)
            .method('DELETE')
            .send();
            expect(deleteCreatedBoard.statusCode).to.equals(200);
            expect(deleteCreatedBoard.body).not.to.have.property('id');
    })
})
