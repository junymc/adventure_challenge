class Api::V1::AdventuresController < ApplicationController

    def create
        @adventure = Adventure.new(adventure_params)
        if @adventure.save
            render json: @adventure, status: 200
        else
            render json: {error: "Something went wrong, please try again."}, status: 400
        end
    end

    def update
        @adventure = Adventure.find(params[:id])
        @adventure.update(adventure_params)
        render json: @adventure, status: 200
    end

    def index
        @adventures = Adventure.all
        render json: @adventures, status: 200
    end

    def show
        @adventure = Adventure.find(params[:id])
        render json: @adventure, status: 200
    end

    private
    def adventure_params
        params.require(:adventure).permit(:name, :category, :cost, :time, :duration, :description, :scratch)
    end

end