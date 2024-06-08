import nba_api.stats.endpoints as nba
from nba_api.stats.static import teams, players

# Nikola Jokić
career = nba.playercareerstats.PlayerCareerStats(player_id='203999')
# team_stats = nba.teamyearbyyearstats.TeamYearByYearStats()

# pandas data frames (optional: pip install pandas)
# x = career.get_data_frames()[0]
# y = team_stats.get_data_frames()[0]
for x in teams.get_teams():
    print("{}: {} ({}) '{}' --> {}, {}; {}".format(x["id"], x["full_name"], x["abbreviation"], x["nickname"], x["city"], x["state"], x["year_founded"]))
print("-"*50)
# for y in players.get_inactive_players():
#     print("{}: {}, {} {}: {}".format(y["id"], y["full_name"], y["first_name"], y["last_name"], y["is_active"]))

# json
career.get_json()

# dictionary
career.get_dict()
