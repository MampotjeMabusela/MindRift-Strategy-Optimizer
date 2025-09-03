# app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI(title="MindRift Strategy Optimizer")

class StrategyInput(BaseModel):
    industry: str
    digital_maturity: int
    revenue_growth: float
    operational_efficiency: float
    innovation_score: float

model = joblib.load("strategy_model.pkl")

@app.post("/predict")
def predict_strategy(input: StrategyInput):
    df = pd.DataFrame([input.dict()])
    prediction = model.predict(df)[0]
    return {"strategy_alignment_score": prediction}
