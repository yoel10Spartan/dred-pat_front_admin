export class StringValidations {
    constructor(){
        this.re_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        this.re_name_lastname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
        this.re_number_phone = /^([0-9]){10}$/;
        this.re_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }

    verifyEmail( stringEmail ){
        return this.re_email.test( stringEmail );
    }

    verifyPassword( stringPassword ){
        return this.re_password.test( stringPassword );
    }

    verifyName( stringName ){
        return this.re_name_lastname.test( stringName );
    }
}