# train_model.py
import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split
import joblib

df = pd.read_csv("pcg_client_data.csv")
X = df.drop("alignment_score", axis=1)
y = df["alignment_score"]

model = GradientBoostingRegressor()
model.fit(X, y)

joblib.dump(model, "strategy_model.pkl")
