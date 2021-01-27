<template>
  <div class="valine-wrapper">
    <div id="valine" class="v" data-class="v">
      <div class="vpanel">
        <div class="vwrap">
          <form @submit="onsend">
            <div class="vheader item3"><input name="nick" placeholder="Jak vám říkají 🤠" class="vnick vinput" type="text" v-model="name">
              <input name="mail" placeholder="Emajl 💌" class="vmail vinput" type="email" v-model="email">
              <input name="link" placeholder="Jste taky 🙃 a máte 🌐? (http://)" class="vlink vinput" type="text" v-model="web" style="width:32%">
            </div>
            <div class="vedit">
              <textarea id="veditor" class="veditor vinput" style="min-height:200px" placeholder="Ňáký návrh, nápad, záviděníhodná věc k přidání...?" v-model="message" required></textarea>
              <div class="vrow">
                <div class="vcol vcol-60 status-bar"></div>
              </div>
              <div class="vrow">
                <progress class="vcol" v-show="loading" />
                <input type="submit" v-show="!loading" value="Poslat 👉" class="vsubmit vbtn vcol" style="float:right" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="custom-block tip" v-if="success">
      <p class="title">Díky za květnatou zprávu!</p>
      <p>Bylo ji přiřazeno ID <code>{{id}}</code> a určitě si ji někdy přečtu 🤩</p>
    </div>
    <div class="custom-block danger" v-if="error">
      <p class="title">Nepodařilo se 😵</p>
      <p>Co k tomu dodat... zkuste to později.</p>
      <p><small>{{errString}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      email: "",
      web: "",
      id: "",
      success: false,
      error: false,
      errStr: "Žádná chyba",
      loading: false
    };
  },
  methods: {
    onsend(event) {
      event.preventDefault();
      // Declare a class
      const Message = AV.Object.extend("Message");

      // Create an object
      const mess = new Message();

      // Set values of fields
      mess.set("from", this.name);
      mess.set("message", this.message);
      mess.set("email", this.email);
      mess.set("web", this.web);
      mess.set("ua", navigator.userAgent);

      // Save the object to the cloud
      var _self = this;
      _self.loading = true;
      mess.save().then(
        (savedMess) => {
          // Execute any logic that should take place after the object is saved
          console.log(`Object saved. objectId: ${mess.id}`);
          _self.error = false;
          _self.success = true;
          _self.id = mess.id;

          _self.name = "";
          _self.message = "";
          _self.email = "";
          _self.web = "";
          _self.loading = false;
        },
        (error) => {
          // Execute any logic that should take place if the save fails
          _self.error = true;
          _self.success = false;
          _self.errStr = error.message;
        }
      );
      this.sendPush()
    },
    sendPush() {
      fetch("http://shared.dorostmladez.cz/smileContact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'no-cors',
        body: JSON.stringify({
          message: this.message,
          name: this.name,
          email: this.email,
          web: this.web,
          ua: navigator.userAgent,
        }),
      });
    },
  },
};
</script>