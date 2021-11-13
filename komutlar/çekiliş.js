const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Aurora Çekiliş Menüsü')
        .setThumbnail('https://cdn.glitch.me/814c426f-d631-474e-9a8d-4d9f7cdf3425%2Fstandard%20(1).gif?v=1636287142129')
        .setDescription('<a:cyclone:906879516222300170> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Çekliş Başlat__**',' `-çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','<a:cyclone:906879516222300170>  `-çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**','<a:cyclone:906879516222300170> `-çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '<a:cyclone:906879516222300170> `-çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '<a:cyclone:906879516222300170>  `-davet` | Botu Sununuya Davet Edersiniz \n<a:cyclone:906879516222300170> `-botbilgi` | Botun İslatistiklerini Görürsünüz \n <a:sar_partner:753157108861501441> `-sunucu` | Sunucuya Özel Komutlar',true)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveawey'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};