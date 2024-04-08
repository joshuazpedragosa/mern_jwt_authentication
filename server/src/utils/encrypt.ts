import bcrypt from 'bcrypt';

class Encryption {

    static bcryptHash(password : string){
        return new Promise((resolve, reject)=>{
            bcrypt.genSalt(10, (err, salt) =>{
                if(err){
                    reject(err)
                }else{
                    bcrypt.hash(password, salt, (error, hash) =>{
                        if(error){
                            reject(error)
                        }
                        else{
                            resolve(hash)
                        }
                    })
                }
            })
        })
    }

    static checkPassword(password : string, enc_password : string){
        return new Promise((resolve, reject)=>{
            bcrypt.compare(password, enc_password, (error, result) => {
                if(error){
                    reject(error)
                }
                else{
                    resolve(result)
                }
            })
        })
    }

}

export const hash = Encryption;