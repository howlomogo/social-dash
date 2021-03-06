const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


// Retrieving Contacts
router.get('/contacts', (req, res, next)=>{
	Contact.find(function(err, contacts){
		// contacts retrieved and send to client in Json format
		res.json(contacts);
	})
});

// Adding Contact
router.post('/contact', (req, res, next)=>{
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.first_name,
		phone: req.body.phone
	});

	newContact.save((err, contact)=>{
		if(err){
			res.json({msg: 'Failed to add contact'});
		}
		else {
			res.json({msg: 'Contact added succesfully'});
		}
	});
});

// Delete Contact
router.delete('/contact/:id', (req, res, next)=>{
	Contact.remove({_id: req.params.id}, function(err, results) {
		if(err) {
			res.json(err);
		}
		else {
			res.json(results);
		}
	});
});

module.exports = router;