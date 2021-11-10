//class

const data = document.getElementById('foo');

class Siswa {
    constructor(username, password, idKelas) {
        this.username = username;
        this.password = password;
        this.idKelas = idKelas;
    }

    gabung() {
        console.log(this.username + `Telah bergabung di kelas ${this.idKelas}`);
    }

    // static hitungMember() {
    hitungMember() {
        console.log(`Tersedia 100member`);
    }
}

// let tambahSiswa = new Siswa('Paijo', '1234', '1');

// tambahSiswa.gabung();

//inheritance /turunan 
class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    paket() {
        console.log(`Hi ${this.username} telah bergabung di kelas ${this.paket}`);
    }
}

let tambahLangganan = new Langganan('budi', 'premium');
tambahLangganan.gabung();
tambahLangganan.hitungMember();