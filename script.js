// ATM Projesi

let atmIslem = true

let bakiye = 500

while (atmIslem) {

    let soru = prompt(`
        ******************************
        1. Bakiye Sorgulama
        2. Para Çekme
        3. Para Yatırma
        4. Çıkış Yap
        ******************************
    `)

    if (soru == '1') {
        alert('Güncel Bakiyeniz: ' + bakiye)
    } else if (soru == '2') {
        let cekilecekMiktar = Number(prompt('Çekmek istediğiniz miktarı belirtiniz:'))

        if (cekilecekMiktar > bakiye) {
            alert(' Yetersiz Bakiye!')
        } else {
            //bakiye = bakiye - cekilecekM,iktar
            bakiye -= cekilecekMiktar
            alert(`Güncel Bakiyeniz: ${bakiye}`)
        }

    } else if (soru == '3') {
        let yatirilacakMiktar = Number(prompt('Ne kadar para yatırmak istiyorsunuz:'))
        bakiye += yatirilacakMiktar
        alert(`Güncel Bakiyeniz: ${bakiye}`)
    } else if (soru == '4') {
        alert('Çıkış Yapıldı')
        atmIslem = false
    } else {
        alert('Geçerli bir işlem giriniz:')
    }




}