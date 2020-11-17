import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'

function Article (props) {

    




   
        return (

            <form className='login-form'>
                <h1 className='text-center'>
                    <span className='font-weight-bold'>Pintereach</span>
                </h1>
    
                <h2 className='text-center'>Add An Article</h2>


                <div className='form-group'>
                    <label for='email' >Article Name:</label>
                    <input
                        name='name'
                        type='text'
                        class='form-control'
                        
                        placeholder='Enter the article name' />

                </div>

                <div className='form-group'>
                    <label for='email'>Article URL:</label>
                    <input
                        name='url'
                        type='text'
                        class='form-control'
                        
                        placeholder='Enter the article name' />

                </div>

                <div class="form-group">
                    <label for="catagory">Catgory:  </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>---Select a Catagory---</option>
                    <option>Automotive</option>
                    <option>Economics</option>
                    <option>Education/ How to</option>
                    <option>Humor</option>
                    <option>Hobbies</option>
                    <option>Music</option>
                    <option>News</option>
                    <option>Politics</option>
                    <option>Sports</option>
                    <option>Technology</option>
                    <option>Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="catagory">Importance:  </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>---Select a Rating---</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                    <small id="ratingHelp" class="form-text text-muted">Rating 1 - 5, with 5 being the most of importance</small>
                </div>
                    
                <button type='button' className='btn btn-primary btn-lg btn-block mt-5 mb-5 ' >Add Article</button>  

            
    
            </form>

            

            
    )
}

export default Article