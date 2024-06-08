from nba_api.stats.static import teams
import nba_api.stats.endpoints as nba

team_dict = teams.get_teams()

def findTeamID(TeamName):
    for team in team_dict:
        if team["full_name"].lower() == TeamName.lower() or team["nickname"].lower() == TeamName.lower():
            return team["id"]

def getSeasonStats(TeamName):
    return nba.teamgamelog.TeamGameLog(findTeamID(TeamName)).get_data_frames()[0]