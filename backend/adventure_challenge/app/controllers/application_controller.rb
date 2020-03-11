class ApplicationController < ActionController::API

    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    # protect_from_forgery with: :exception

    def current_user
        User.find(session[:user_id])
    end

    def logged_in?
        !!current_user
    end

    private

    def self_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
    
end
