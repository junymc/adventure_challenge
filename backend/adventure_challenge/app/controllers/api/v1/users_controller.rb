class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            session[:id] = @user.id
            render json: @user, status: 200
        else
            render json: {error: "Unable to create an account."}, status: 400
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end