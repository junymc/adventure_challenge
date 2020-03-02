class ApplicationController < ActionController::API

    def current_user
        User.find(id: session[:id])
    end

    def logged_in?
        !!current_user
    end

    private

    def self_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
    
end
