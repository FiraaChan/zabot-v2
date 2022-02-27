const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Daffa\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6281348761974:+62 813-4876-1974\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Daffa', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
