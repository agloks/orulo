Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'api/auth/login', to: 'authentication#authenticate'
  post 'api/user/signup', to: 'users#create'
  get 'api/user/profile', to: 'users#index'
  patch 'api/user/favorites', to: 'users#add_favorite'
end
