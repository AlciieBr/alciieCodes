module.exports = normalizeText

function normalizeText (text) {
     text = text?.toLowerCase()
     ?.normalize("NFD")
     ?.replace(/[\u0300-\u036f]/g, "")
     ?.replace("-", "")
     ?.replace(/\s/g, "");
     return text
}