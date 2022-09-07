fetchContacts()

async function fetchContacts() {
    const response = await fetch('/api/contact')
    const contacts = await response.json()

    contacts.forEach(contact => {
        const div = document.createElement('div')
        div.innerText = contact.name + ', ' + contact.phonenumber + ', ' + contact.email
        document.body.append(div)
    });
}