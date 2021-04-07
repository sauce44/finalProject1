class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise  :database_authenticatable, :registerable,
            :recoverable, :rememberable, :confirmable, :validatable, 
            :encryptable, :encryptor => :restful_authentication_sha1
    def generate_jwt
      JWT.encode({  id: id,
                    exp: 60.days.from_now.to_i },
                    Rails.application.secrets.secret_key_base)
    end

    belongs_to :teams
    has_many :posts
end
