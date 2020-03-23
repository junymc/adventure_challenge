class Api::V1::EvidencesController < ApplicationController

    def create
        # byebug
        if params[:adventureId]
            @evidence = Evidence.new(image: params[:image], description: params[:description], adventure_id: params[:adventureId], user_id: params[:userId])
            
        end
        if @evidence.save
            render json: @evidence, status: 200
        else
            render json: {error: "Something went wrong, try again."}, status: 400
        end
    end

    def update
        @evidence = Evidence.find(params[:id])
        @evidence.update
        render json: @evidence, status: 200
    end

    def show
        if params[:adventureId]
            @evidence = Evidence.find(params[:adventureId])
        end
        render json: @evidence, status: 200
    end

    def index
        @evidences = Evidence.all
        render json: @evidences, status: 200
    end

    def destroy
        # byebug
        @evidence = Evidence.find(params[:id])
        if @evidence.delete
            render json: {message: "Evidence is deleted!"}, status: 200
        else
            render json: {error: "Something went wrong, try again."}, status: 400
        end
    end

    private
    def evidence_params
        params.require(:evidence).permit(:image, :description, :adventure, :user)
    end
end