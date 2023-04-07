<template lang="pug">
.container 
    .up
        .left
            h1 Expose your brand to millions by advertising on our platform
            p Humm has nearly 2 million fans and followers — and is growing by the day! They all come here to learn, create, and celebrate the love of food, which makes it the perfect place to advertise about your brand. No matter the size of your company, there’s always a place for you — become a part of HUMM’s conversations with our digital ads that inspire action from our fans and followers! Choose from multiple advertising slots to across our website, with options for customizable articles, detailed product reviews, and visual media. Drop us a line now. 
        .right 
            img(src="../.././assets/images/ad3.png")
    .mid 
        .card 
            .image
                img(src="../.././assets/magic.png")
            .cont
                h3 Find the audience that matters to you:
                p   Our content is created based on our viewer’s interests, behaviors, location, and more. Connect your brand with the people who are driving new behaviors and values that are changing the world.
            
        .card 
            .image
                img(src="../.././assets/images/fork.svg")
            .cont
                h3 Find the audience that matters to you:
                p   Our content is created based on our viewer’s interests, behaviors, location, and more. Connect your brand with the people who are driving new behaviors and values that are changing the world.
        .card 
            .image
                img(src="../.././assets/images/sixlines.svg")
            .cont
                h3 Find the audience that matters to you:
                p   Our content is created based on our viewer’s interests, behaviors, location, and more. Connect your brand with the people who are driving new behaviors and values that are changing the world.
        .card 
            .image
                img(src="../.././assets/magic.png")
            .cont
                h3 Find the audience that matters to you:
                p   Our content is created based on our viewer’s interests, behaviors, location, and more. Connect your brand with the people who are driving new behaviors and values that are changing the world.

    .form
        h1 Advertise with Humm
        .items 
            .item
                label(for="full") full name
                input#full(type="text")

            .item
                label(for="phone") phone number
                input#phone(type="number")
            .item
                label(for="email") email
                input#email(type="email")
            .item
                label(for="country") country
                input#country(type="text")
        .area
            label(for="message") message
            textarea#message()
        button.btn submit
</template>

<style lang="scss" scoped>
.container {
  .up {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2em;
    .left {
      align-self: center;
      p {
        font-size: 14px;
      }
      h1 {
        margin-bottom: 1em;
      }
    }
    .right {
      img {
        width: 100%;
      }
    }
  }
  .mid {
    margin-bottom: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    .card {
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column;
      border: 1px black solid;
      gap: 1em;
      border-radius: 0;
      .image {
        width: 35px;
        img {
            margin: 1em 0  0 1em ;
          width: 100%;
        }
      }
    }
  }
  .form{
    display: flex;
    flex-direction: column;
    
    background: #000;
    color: #fff;
    padding: 4em;
    .items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        .item {
          display: flex;
          flex-direction: column;
          input{
            border: #fff 1px solid ;
            color: #fff;
            background: inherit;
          }
        }
      }
      .area {
        margin-top: 1em;
        display: grid;
        grid-template-columns: 1fr;
        #message {
            border: #fff 1px solid ;
            background: inherit;
            height: 5em;
          
        }
      }
      .btn {

        box-shadow: 5px 5px #ffffff;
        width: 15%;
        margin-top: 1em;
        border: #fff 1px solid ;
        background: #000;
        color: #fff;
        border-radius: 0px;
        padding: 5px 20px;
        margin-bottom: 2em;
        transition: 300ms;

        &:hover {
          background-color: #fff;
          color: #000;
          border: #000 1px solid ;
          cursor: pointer;
        }
      }
    
  }
}
@media (max-width: 992px) {
  .container {
    .up {
      display: grid;
      grid-template-columns: 1fr;
    }
    .mid {
      margin-top: 2em;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .card {
        padding: 1em;
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    .mid {
      display: grid;
      grid-template-columns: 1fr;
    }
    .form{
        padding: 2em;
        .items {
            display: grid;
            grid-template-columns: 1fr;
            
            gap: 1em;
          }
          .area {
            margin-top: 1em;
            display: flex;
            
            flex-direction: column;
            #message {
              
              height: 5em;
            }
          }
          .btn {
            width: 50%;
           
          }
    }
  }
}
</style>
