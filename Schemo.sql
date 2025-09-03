CREATE TABLE client_profiles (
    id SERIAL PRIMARY KEY,
    industry VARCHAR(100),
    digital_maturity INT,
    revenue_growth FLOAT,
    operational_efficiency FLOAT,
    innovation_score FLOAT,
    alignment_score FLOAT
);
