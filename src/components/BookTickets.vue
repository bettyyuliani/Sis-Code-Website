<!-- This component is a pop out window which is hidden by default
and will be displayed in EventsPage.vue when user clicks on "Book Tickets".
This component displays the total amount that user needs to pay
based on the event that they have chosen and the quantity of tickets.
It incorporates external PayPal API as payment method, and redirects
user back to dashboard page if payment is successful.

Vue concepts in this component:
1. class binding
2. conditional rendering
3. event handling
4. custom event
5. form input binding
6. routing
7. state management (commit mutations)
8. props
9. compute property
10. watcher
11. single file component

extra concepts:
1. paypal API
2. environment scope
 -->
<template>
  <!-- open book ticket window-->
  <div id="booktickets" v-show="event" class="modal" :class="this.openmodal ? 'show' : 'hide'">
    <!-- window display -->
    <div class="modal-content">
      <!-- icon for closing the ticket window -->
      <div class="close" @click="closemodal">&times;</div>
      <!-- header of book ticket window -->
      <div class="header">
        <p class="title">{{ event[0].name }}</p>
        <p class="date">{{ event[0].date }}</p>
        <p class="city">{{ event[0].city }}</p>
      </div>
      <!-- user input container -->
      <div class="input">
        <p style="font-size: 0.8rem;" class="instructions">ENTER THE AMOUNT OF TICKETS</p>
        <!-- container for participant tickets -->
        <div class="participant">
          <p>→ Participant Ticket - ${{ event[0].price }}</p><span><input type="number" v-model.lazy="qty" min="1"/></span>
        </div>
        <!-- container for mentor tickets -->
        <div class="mentor">
          <p>→ Mentor Ticket</p><span><input type="number" min="1"/></span>
        </div>
      </div>
      <!-- container for displaying total amount -->
      <div class="total" id="total">
        <p>SUBTOTAL ${{ calculateTotal }}</p>
        <p>GST $0</p>
        <hr />
        <strong><p style="color: black; margin-top: 20px;">TOTAL AMOUNT ${{ calculateTotal }}</p></strong>
        <!-- display button for payment -->
        <div id="paypal-button"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // accepting props from parent component
  props: ["open", "event"],
  // data property for this component
  data() {
    return {
      qty: 1,
      openmodal: this.open,
      totalAmount: 0
    };
  },
  // adding watchers which opens this modal
  watch: {
    open: function() {
      this.openmodal = this.open;
      // sets some buffer time before appearing the payment button, as there is some buffer time in between ticket window opening
      setTimeout(() => {
        this.payPalPayment();
      }, 1000);
    }
  },
  // adds a computed property, total is dynamic and changes as user inputs quantity
  computed: {
    calculateTotal: function() {
      return this.event[0].price * this.qty;
    }
  },
  methods: {
    /**
     * @description hides the component through class binding
     * @emits closed event to parent component
     */
    closemodal() {
      this.openmodal = false;
      this.$emit("closed");
    },
    
    /**
       * @description embeds external paypal API which accepts payment from user, 
       * the 'book' constant is needed to allow the API scope to access data within this component.
       * @link code follows the template from https://developer.paypal.com/docs/api/overview/
       */ 
    payPalPayment: function() {
      const payPalButton = document.querySelector("#paypal-button"); // retrieving the reserved space for the button
      document.querySelector("#paypal-button").remove(); // to avoid double render of button
      document.querySelector("#total").append(payPalButton);
      const book = this; // putting bookticket component inside the API scope

      // start rendering button
      window.paypal.Button.render(
        {
          // Configure environment
          env: "sandbox",
          client: {
            sandbox:
              //developer's paypal ID
              "ARsMINZqQGPu3ZtocqIB4C1uOqWOOr7m8a3eV8w4a17tczmvG7kGN70UVRvNI8uvxZd5JBTLqbYFD0Fo"
            // production: 'demo_production_client_id'
          },
          locale: "en_US",
          // style of button
          style: {
            size: "small",
            color: "gold",
            shape: "pill"
          },

          // Enable Pay Now checkout flow (optional)
          commit: true,

          // Set up a payment
          payment: function(data, actions) {
            return actions.payment.create({
              transactions: [
                {
                  amount: {
                    // the total amount that user needs to pay comes from the calculation of total*qty
                    total: String(book.calculateTotal),
                    currency: "AUD"
                  }
                }
              ]
            });
          },
          // Execute the payment
          onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
              // once payment is completed, add the event into store
              var event = {
                event: book.event[0].name,
                date: book.event[0].date
              };
              book.$store.commit("addEvent", event);
              // confirmation message to user
              window.alert("Your event has been booked for you!");
              book.$router.replace("/dashboard");
            });
          }
        },
        "#paypal-button"
      );
    },
  }
};
</script>

<style scoped>
/* display book ticket when prompted */
.show {
  display: block;
}

/* hides book ticket when close is prompted*/
.hide {
  display: none;
}

/* creates a pop up book ticket window */
/* the window is hidden by default */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* content box for the pop up window */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

/* for close button */
.close {
  color: #aaa;
  float: right;
  font-size: 50px;
  font-weight: bold;
  margin-top: -15px;
}

/* close button when hovered and clicked */
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* styling for instructing user to input their tickets */
.instructions {
  margin-top: 40px;
}

/* styling the entire window content */
#booktickets {
  box-shadow: 5px 5px 10px rgb(196, 196, 196);
}

/* styling for the window header which contains event name, date and city */
.header {
  text-align: center;
  background-color: rgba(102, 72, 149, 1);
  color: white;
  line-height: 1.5;
  padding: 5px;
}

/* title of event */
.title {
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0;
}

/* date and city of event */
.date,
.city {
  font-size: 1rem;
}

/* styling for input container */
.input {
  margin-left: 30px;
}

/* input box for both participant and mentor tickets */
.participant,
.mentor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem;
  width: 80%;
  box-shadow: 5px 5px 10px rgb(196, 196, 196);
  margin-bottom: 1.2em;
}

/* styles the name of ticket type inside the box */
.participant p,
.mentor p {
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: 300;
}

/* styles the input box for choosing number */
input[type="number"] {
  height: 25px;
  width: 70px;
  color: grey;
}

/* creates a line between total amount and amount */
hr {
  width: 30%;
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
}

/* styles text for total amount */
.total {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: grey;
  margin-top: 20px;
  font-weight: 200;
}

/* media query which allows the page to be responsive */
@media screen and (max-width: 1000px) {
  .participant p,
  .mentor p {
    font-size: 1rem;
  }
  .participant,
  .mentor {
    width: 90%;
  }
  .input {
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
  }
  .total {
    align-items: center;
  }
  button.bookticket {
    width: 40%;
  }
  hr {
    width: 100%;
  }
}
</style>
