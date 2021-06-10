fetch('https://api.thedogapi.com/v1/images/search').then(res => res.json()).then(data =>{
    console.log(data)
    nameDog = data[0].breeds[0].name
    imageDog = data[0].url
    life_span = data[0].breeds[0].life_span
    temp = data[0].breeds[0].temperament
    historical = data[0].breeds[0].bred_for
    sizeMeters = `${data[0].breeds[0].height.metric} Cm`
    weight = `${data[0].breeds[0].weight.metric} Kg`

    let description_dog = document.querySelector('#description')
    description_dog.innerText = `${temp}  ${historical}`

    let age = document.querySelector('#age')
    age.innerText = life_span

    let weight_dog = document.querySelector('#weigth')
    weight_dog.innerText = weight

    let size = document.querySelector('#size')
    size.innerText = sizeMeters

    let img = document.querySelector('#img')
    img.setAttribute('src', imageDog)

    let name_dog = document.querySelector('#nameDog')
    name_dog.innerText = nameDog
})