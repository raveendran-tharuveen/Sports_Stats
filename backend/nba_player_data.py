from nba_api.stats.static import players
import nba_api.stats.endpoints as nba

player_dict = players.get_players()

def findPlayerID(PlayerName):
    for player in player_dict:
        if player["full_name"].lower() == PlayerName.lower():
            return player["id"]
        
def getPlayerSeasonStats(PlayerName):
    id = findPlayerID(PlayerName)
    return nba.playergamelog.PlayerGameLog(id).get_data_frames()[0]

print("~"*50)
playerName = "lebron james"
print(playerName, ": ", findPlayerID(playerName), ": \n", getPlayerSeasonStats(playerName))
