

const { createApp } = Vue

  createApp({

    data() {

      return {

        contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.jpg',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.jpg',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ],

      // new properties
      
      // active contact index
      activeContactIndex: 0,

      // user new message
      newMessageText: "",

      // timeout 
      answerTimeout: "",

      // input contact search-bar 
      searchedInput:"",



      }

    },

    /* -------------------------------------------------------------------------- */
    /*                                  functions                                 */
    /* -------------------------------------------------------------------------- */

    methods: {

        
      /* -------------------------- change active contact ------------------------- */
      changeActiveContact(clickedContactIndex){

        this.activeContactIndex = clickedContactIndex;

      },


      /* ---------------------------- send new message ---------------------------- */
      sendNewMessage(){

        // dichiaro la variabile richiamante luxon
        let orarioMessaggio = luxon.DateTime;

        // taglio la stringa dell'orario generata al carattere che mi serve
        messageSendedTime = orarioMessaggio.now().toISO().slice(0, - 10);

        // dichiaro il nuovo oggetto messaggio
        let newMessageObject = {
          date: "",
          message: '',
          status: 'sent'
        }

        // attribuisco alla data dell'oggetto "nuovo messaggio" la data creata
        newMessageObject.date = messageSendedTime;

        // attribuisco alla proprietà "messaggio" dell'oggetto creato il valore dell'input nel DOM
        newMessageObject.message = this.newMessageText;

        // inserisco nell'array messages il nuovo oggetto 
        this.contacts[this.activeContactIndex].messages.push(newMessageObject);

        // inizializzo la proprietà "newMessageText" corrispondente al valore inserito nell'input nel DOM
        this.newMessageText = "";

      },


      /* ---------------------------- timeout to answer --------------------------- */
      answerToAMessage(){

        // dichiaro la variabile richiamante luxon
        let orarioRisposta = luxon.DateTime;
        
        // taglio la stringa dell'orario generata al carattere che mi serve
        answerSendedTime = orarioRisposta.now().toISO().slice(0, - 10);

        // dichiaro il nuovo oggetto corrispondente al messaggio di risposta
        let newAnswer = {
          date: '',
          message: 'Ok!',
          status: 'received'
        }

        // attribuisco alla data dell'oggetto "nuova risposta" la data creata
        newAnswer.date = answerSendedTime;

        // timeout to answer
        answerTimeout = setTimeout(() => {

          // inserisco nell'array messages il nuovo oggetto
          this.contacts[this.activeContactIndex].messages.push(newAnswer);
    

        },1000)

      },


      /* ----------------------------- search contact ----------------------------- */
      contactSearch(){

        // controllo per ogni nome nei contatti
        for (let i = 0; i < this.contacts.length; i++) {
            

          // se il nome contiene l'input
          if(this.contacts[i].name.toLowerCase().includes(this.searchedInput.toLowerCase())){
              
            // il contatto sarà visibile
            this.contacts[i].visible = true;
              
            // altrimenti
          }else{
              
            // il contatto non sarà visibile
            this.contacts[i].visible = false;
              
          }
        }
        
      },



      /* ----------------------------- delete message ----------------------------- */
      deleteMessage(messageIndex){

        this.contacts[this.activeContactIndex].messages.splice(messageIndex,1)
      },



      /* ------------------------ show contact last access ------------------------ */
    showLastAccess(){

        // dichiaro la variabile corrispondente all'ultimo accesso
        let lastAccess = "";

        // se l'ultimo messaggio è stato un messaggio ricevuto 
        if (this.contacts[this.activeContactIndex].messages[this.contacts[this.activeContactIndex].messages.length -1].status == "received") {

            // inserisco nel dom l'orario del messaggio presente nell'array
            lastAccess = "Ultimo accesso oggi alle:" +" "+ this.contacts[this.activeContactIndex].messages[this.contacts[this.activeContactIndex].messages.length -1].date.slice(11,-3);
            
            return lastAccess;

            // altrimenti
        }else{

            // eseguo un ciclo al contrario per controllare dall'ultimo al primo 
            for (let i = (this.contacts[this.activeContactIndex].messages.length - 1); i >= 0 ; i--) {

                // il primo messaggio che trovo con status received
                if(this.contacts[this.activeContactIndex].messages[i].status == "received"){
                    
                    // imposta la propria data come ultimo accesso del contatto
                    lastAccess = "Ultimo accesso oggi alle:" +" "+ this.contacts[this.activeContactIndex].messages[i].date.slice(11,-3);

                    return lastAccess;

                // in caso non ci siano messaggi ricevuti stampo "ultimo accesso tanto tempo fa"
                }else{

                    lastAccess = "Ultimo accesso tanto tempo fa"
                }

            }
        }

        // ritorno la variabile
        return lastAccess;

      },


      
    }
  

  }).mount('#app')