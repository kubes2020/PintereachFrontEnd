import * as yup from 'yup'


const AddArticle = yup.object().shape ({
    articleName: yup
        .string()
        .required('Article name is required'),

    articleURL: yup
        .string()
        .required('Article URL is required'),

    catagory: yup
        .string()
        .oneOf(['Automotive', 'Economics', 'Education', 'Humor', 'Hobbies', 'Music', 'News', 'Politics', 'Sports', 'Technology', 'Other']),

    rating: yup
        .string()
        .oneOf(['1', '2', '3', '4', '5'], 'rating is required')
})

export default AddArticle

