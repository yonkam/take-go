class Contact {

  rue;
  numeros;
  codePostal;
  ville;
  pays;
  numeroTelephone;
  eMail;


  constructor() {

  }

  constructor(p_rue, p_numeros, p_codePostal, p_ville, p_numeroTelephone, p_eMail) {

    this.rue = p_rue;
    this.codePostal = p_codePostal;
    this.ville = p_ville;
    this.numeroTelephone = p_codePostal;
    this.eMail = p_eMail;
  }

  getRue() {

    return this.rue;
  }

  getCodePostal() {

    return this.codePostal;
  }

  getVille() {

    return this.ville;
  }

  getNumeroTelephone() {

    return this.NumeroTelephone;
  }

  getEMail() {

    return this.EMail;
  }


}
