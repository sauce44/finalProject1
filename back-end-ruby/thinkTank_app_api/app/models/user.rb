class User < ApplicationRecord
    belongs_to :teams
    has_many :posts
end
