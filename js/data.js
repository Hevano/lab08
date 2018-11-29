let avocadoHTML = "<ul><li>Avocado</li><li>A green fruit with a large pit.</li>";

let avocadoJS = ["Avocado", "A green fruit with a large pit."];

let bananaHTML = "<ul><li>Banana</li><li>A yellow fruit with a slippery peel. Contains a lot of potasium.</li>";

let bananaJS = ["Banana", "A yellow fruit with a slippery peel. Contains a lot of potasium."];

let blueberryHTML = "<ul><li>Blueberry</li><li>A berry that just so happens to be blue. Contains anti-oxidants.</li>";

let blueberryJS = ["Blueberry", "A berry that just so happens to be blue. Contains anti-oxidants."];

let cherryHTML = "<ul><li>Cherry</li><li>A small pitted fruit that grows on trees.</li>";

let cherryJS = ["Cherry", "A small pitted fruit that grows on trees."];

let mangoHTML = "<ul><li>Mango</li><li>A tropical fruit that is objectivly better than any other fruit on this list.</li>";

let mangoJS = ["Mango", "A tropical fruit that is objectivly better than any other fruit on this list."];

let orangeHTML = "<ul><li>Orange</li><li>A citrus fruit renowned for it's morning juice.</li>";

let orangeJS = ["Orange", "A citrus fruit renowned for it's morning juice."];

let pineappleHTML = "<ul><li>Pineapple</li><li>Perfect for Pizza</li>";

let pineappleJS = ["Pineapple", "Perfect for Pizza"];

let pomegraniteHTML = "<ul><li>Pomegranite</li><li>A fruit from afghanistan.</li>";

let pomegraniteJS = ["Pomegranite", "A fruit from afghanistan."];

let raspberryHTML = "<ul><li>Raspberry</li><li>A red, raspy berry</li>";

let raspberryJS = ["Raspberry", "A red, raspy berry"];

let watermelonHTML = "<ul><li>Watermelon</li><li>Is it a fruit? Is it a melon? Nobody knows.</li>";

let watermelonJS = ["Watermelon", "Is it a fruit? Is it a melon? Nobody knows."];

module.exports = {

  getHTML: function (fruit) {
    console.log(parseInt(fruit), "fruit!");
    switch (parseInt(fruit)) {
      case 0:
        return avocadoHTML;
        break;
      case 1:
        return bananaHTML;
        break;
      case 2:
        return blueberryHTML;
        break;
      case 3:
        return cherryHTML;
        break;
      case 4:
        return mangoHTML;
        break;
      case 5:
        return orangeHTML;
        break;
      case 6:
        return pineappleHTML;
        break;
      case 7:
        return pomegraniteHTML;
        break;
      case 8:
        return raspberryHTML;
        break;
      case 9:
        return watermelonHTML;
        break;
      default:
        console.log("default");
        break;
    }
  },

  getJSON: function (fruit) {
    switch (fruit) {
      case 0:
        return avocadoJS;
        break;
      case 1:
        return bananaJS;
        break;
      case 2:
        return blueberryJS;
        break;
      case 3:
        return cherryJS;
        break;
      case 4:
        return mangoJS;
        break;
      case 5:
        return orangeJS;
        break;
      case 6:
        return pineappleJS;
        break;
      case 7:
        return pomegraniteJS;
        break;
      case 8:
        return raspberryJS;
        break;
      case 9:
        return watermelonJS;
        break;
    }
  },

  /*
  getavocadoHTML: function () {
      console.log("called: getavocadoHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return avocadoHTML;
  },
  getbananaJSON: function () {
      console.log("called: getbananaJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return bananaJS;
  }

  getbananaHTML: function () {
      console.log("called: getbananaHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return bananaHTML;
  },
  getavocadoJSON: function () {
      console.log("called: getavocadoJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return avocadoJS;
  }

  getblueberryHTML: function () {
      console.log("called: getblueberryHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return blueberryHTML;
  },
  getblueberryJSON: function () {
      console.log("called: getblueberryJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return blueberryJS;
  }

  getcherryHTML: function () {
      console.log("called: getcherryHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return cherryHTML;
  },
  getmangoJSON: function () {
      console.log("called: getmangoJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return mangoJS;
  }

  getmangoHTML: function () {
      console.log("called: getmangoHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return mangoHTML;
  },
  getorangeJSON: function () {
      console.log("called: getorangeJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return orangeJS;
  }

  getpineappleHTML: function () {
      console.log("called: getpineappleHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return pineappleHTML;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return JS;
  }

  getpomegraniteHTML: function () {
      console.log("called: getpomegraniteHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return pomegraniteHTML;
  },
  getpomegraniteJSON: function () {
      console.log("called: getpomegraniteJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return pomegraniteJS;
  }

  getraspberryHTML: function () {
      console.log("called: getraspberryHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return raspberryHTML;
  },
  getraspberryJSON: function () {
      console.log("called: getraspberryJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return raspberryJS;
  }

  getwatermelonHTML: function () {
      console.log("called: getwatermelonHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return watermelonHTML;
  },
  getwatermelonJSON: function () {
      console.log("called: getwatermelonJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return watermelonJS;
  } */
};