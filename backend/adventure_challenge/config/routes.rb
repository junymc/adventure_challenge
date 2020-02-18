Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   
  resources :user do
    resources :adventure do
    end
  end

  resources :adventure

end
