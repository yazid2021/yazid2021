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