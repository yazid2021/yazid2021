var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

/*document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");*/
var navbar = {
    pertama: 'Home',
    kedua: 'Skills',
    ketiga: 'About',
    keempat: 'Contact'
};

for(var key in navbar) {
    console.log('Nama navbar ' + key + ' adalah ' + navbar[key]);
}