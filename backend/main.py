# make sure virtual environment (venv) is activated with: 
    # cd backend
    # source venv/bin/activate
    # python3 main.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

from nba_team_data import getSeasonStats

app = Flask(__name__)

# Allow CORS for the specific frontend origin
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

@app.route("/api/users", methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                'User #1',
                'User #2',
                "User #3"
            ]
        }
    )

@app.route('/api/items', methods=['POST'])
def get_items():
    data = request.json
    param = data.get('param', '')
    # Process the parameter and generate response accordingly
    items = [f'Item {i}' for i in range(1, 4)] if param == '' else [f'{param} {i}' for i in range(1, 4)]
    return jsonify(items)

@app.route('/api/season_stats', methods=['GET'])
def get_season_stats():
    param = request.args.get('teamName', '')  # Retrieve query parameter
    teamData = []
    if param:
        teamData = pd.DataFrame(getSeasonStats(param)).to_dict(orient='records')  # Fetch team data based on the parameter
    
    return jsonify({'users': teamData})  # Return data in the expected format

# @app.route('/api/season_stats', methods=['GET'])
# def get_season_stats():
#     team_name = request.args.get('teamName', '')  # Retrieve teamName query parameter
#     month = request.args.get('month', '')  # Retrieve month query parameter

#     if not team_name:
#         return jsonify({'error': 'Missing teamName parameter'}), 400  # Bad Request

#     if not month:
#         return jsonify({'error': 'Missing month parameter'}), 400  # Bad Request

#     try:
#         # Fetch team data based on the team_name and month parameters
#         team_data = pd.DataFrame(getSeasonStats(team_name, month)).to_dict(orient='records')
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500  # Internal Server Error

#     return jsonify({'users': team_data}), 200  # OK

if __name__ == "__main__":
    app.run(debug=True, port=8080)
