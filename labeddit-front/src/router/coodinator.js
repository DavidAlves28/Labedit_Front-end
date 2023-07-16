// buttons para navegação de Pages
export const goToLogin=  (navigate) => { 
    navigate('/')
}
export const goToSignup =  (navigate) => { 
    navigate('/signupPage')
}
export const goToFeed =  (navigate) => { 
    navigate('/feed')
}
export const goToCommentToPost =  (navigate,id) => { 
    navigate(`/feed/${id}`)
}