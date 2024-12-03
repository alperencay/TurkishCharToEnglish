$("#btnTranslate").click(() => {
    //toLowerCase İngilizceye göre küçük harfe çevirir
    const turkishText = $("#turkish-text").val()

    //Replace all metindeki özel bir metni istenilen metne çevirir.
    let englishText = turkishText
        .replaceAll("ç", "c")
        .replaceAll("ş", "s")
        .replaceAll("ü", "u")
        .replaceAll("ğ", "g")
        .replaceAll("ı", "i")
        .replaceAll("ö", "o")

        .replaceAll("Ç", "C")
        .replaceAll("Ş", "S")
        .replaceAll("Ü", "U")
        .replaceAll("Ğ", "G")
        .replaceAll("İ", "I")
        .replaceAll("Ö", "O")

    const doConvertUpper = $("#upperCheckBox").prop("checked")
    if (doConvertUpper) englishText = englishText.toUpperCase()
    $("#english-text").val(englishText)
})
