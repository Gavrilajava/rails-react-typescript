Rails.application.routes.draw do

  resources :users, except: [:new, :edit, :show]
end
