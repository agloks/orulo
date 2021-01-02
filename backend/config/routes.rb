Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'auth/login', to: 'authentication#authenticate'
  post 'user/signup', to: 'users#create'
  get 'user/profile', to: 'users#index'
  patch 'user/favorites', to: 'users#add_favorite'
end
