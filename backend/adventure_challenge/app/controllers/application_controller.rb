class ApplicationController < ActionController::API

    def current_user
        User.find(id: session[:id])
    end

    def logged_in?
        !!current_user
    end
    
end
