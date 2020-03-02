Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :adventures do
          resources :evidences do
          end
        end
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :adventures do
      end
    end
  end

  get "/auth" => "sessions#auth"
  get "/signup" => "users#create"
  post "/login" => "sessions#create"
  delete "/logout" =>"sessions#destroy", as: "logout"





end
