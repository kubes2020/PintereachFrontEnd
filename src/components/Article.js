import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'
import * as yup from 'yup'
import AddArticle from '../validation/Article_Schema'

import { connect } from 'react-redux'
import { addArticle } from '../actions'

function Article(props) {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [newArticle, setNewArticle] = useState({
        articleName: '',
        articleURL: '',
        catagory: '',
        rating: ''
    })

    const [errors, setErrors] = useState({
        articleName: '',
        articleURL: '',
        catagory: '',
        rating: ''
    })

    useEffect(() => {
        AddArticle.isValid(newArticle)
            .then(valid => {
                setButtonDisabled(!valid)
            })
    }, [newArticle])

    const validate = event => {

        let value = event.target.value;

        yup
            .reach(AddArticle, event.target.name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [event.target.name]: ''
                })
            })
            .catch(error => {
                setErrors({
                    ...errors, [event.target.name]: error.errors[0]
                })
            })
    }

    const onChange = event => {
        const { value } = event.target

        event.persist();

        validate(event);

        setNewArticle({
            ...newArticle, [event.target.name]: value
        })

    }

    const formSubmit = event => {

        event.preventDefault()
        props.addArticle({
            art_name: newArticle.articleName,
            art_url: newArticle.articleURL,
            rating: newArticle.rating,
            category: newArticle.catagory
        })

        props.history.push('/home')
    }

    return (

        <form className='login-form' onSubmit={formSubmit}>
            <h1 className='text-center'>
                <span className='font-weight-bold'>Pintereach</span>
            </h1>

            <h2 className='text-center'>Add An Article</h2>


            <div className='form-group'>
                <label for='article-name' >Article Name:</label>
                <input
                    name='articleName'
                    type='text'
                    class='form-control'
                    onChange={onChange}
                    value={newArticle.articalName}
                    placeholder='Enter the article name' />

            </div>

            <div className='form-group'>
                <label for='email'>Article URL:</label>
                <input
                    name='articleURL'
                    type='text'
                    class='form-control'
                    onChange={onChange}
                    value={newArticle.articleURL}
                    placeholder='Enter the article url' />

            </div>

            <div class="form-group">
                <label for="catagory">Catgory:  </label>
                <select class="form-control" id="catagory" onChange={onChange} name='catagory'>                   
                    <option value=''>---Select a Catagory---</option>
                    <option value='Automotive'>Automotive</option>
                    <option value='Economics'>Economics</option>
                    <option value='Education'>Education</option>
                    <option value='Humor'>Humor</option>
                    <option value='Hobbies'>Hobbies</option>
                    <option value='Movies'>Movies</option>
                    <option value='Music'>Music</option>
                    <option value='News'>News</option>
                    <option value='Politics'>Politics</option>
                    <option value='Sports'>Sports</option>
                    <option value='Technology'>Technology</option>
                    <option value='Other'>Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="rating">Importance:  </label>
                <select class="form-control" id="rating" onChange={onChange} name='rating'>
                    <option value=''>---Select a Rating---</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                <small id="ratingHelp" class="form-text text-muted">Rating 1 - 5, with 5 being the most of importance</small>
            </div>


            <button className='btn btn-primary btn-lg btn-block mt-5 mb-5 ' disabled={buttonDisabled}>Add Article</button>


        </form>


    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addArticle })(Article)
