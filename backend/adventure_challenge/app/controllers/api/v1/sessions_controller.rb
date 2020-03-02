class Api::V1::SessionsController < ApplicationController

    def auth
        cookies["logged_in"] = logged_in?
        render json: {csrf_auth_token: form_authenticity_token}
    end
    
    def create
        @user = User.find_by(@user.id)
        if @user && @user.authenticate(params[:password])
            session[:id] = @user.id
            render json: @user, status: 200
        else
            render json: {error: "Unable to login, try again."}, status: 400
        end
    end

    def destroy
        session.delete(:id)
        render json: {status: 200}
    end
end