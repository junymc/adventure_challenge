Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   
  resources :users do
    resources :adventures do
      resources :evidences do
      end
    end
  end

  resources :adventures

end
