const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬[** ✨**Eğlence Bot (RaknaX)** ✨ **]▬▬▬▬**  \n> :floppy_disk: **Şuanda kullanılan prefix** `a!`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬

> **» a!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» a!balık-tut :** Denizde balık tutarsınız.
> **» a!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» a!ara155 :** Polisi aramanıza yarar.
> **» a!efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» a!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» a!espri :** Bot sizin için espri yapar.
> **» a!hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» a!kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» a!kralol :** Kral olmanıza yarar.
> **» a!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» a!yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» a!yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» a!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» a!şekerye :** Bot size şeker ikram eder.
> **» a!sa-as : **Selamın Aleyküm Komudunu Özel Olaraj açar ve kapatır**
> **» a!sil :  Sıradan Sil-Temizle Komudu
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/bjJVPv4gjk)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=787040860910256139&scope=bot&permissions=8)** **•** **[Web-Site](https://www.discord.com/)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/787041331964411906/787044139103289374/sa.gif')
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["help", "h"],
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};