const $ = document.querySelector.bind(document)

const peopleList = $('#people-list')

const addPersonBtn = $('#add-person-btn')

faker.locale = 'pt_BR'

addPersonBtn.addEventListener('click', () => {
    const name = faker.name.findName()
    const personItem = document.createElement('li')
    personItem.className = 'person-name'
    personItem.innerText = name
    peopleList.appendChild(personItem)
})