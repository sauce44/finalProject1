Rails.application.routes.draw do
  devise_for :models
  scope :api, defaults: { format: :json } do
    devise_for :users,  controllers: { sessions: :sessions },
                        path_names: { sign_in: :login }
    resource :user, only: [:show, :update]
  end
  resources :comments
  resources :posts
  resources :users
  resources :teams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
