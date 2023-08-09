export const player_prop_markets = [
    { 
      markets: "player_pass_tds,player_pass_yds,player_pass_completions,player_pass_attempts,player_pass_interceptions,player_pass_longest_completion,player_rush_yds,player_rush_attempts,player_rush_longest,player_receptions,player_reception_yds,player_reception_longest",
      label: "americanfootball_nfl"
    },
    {
      markets: "player_points,player_rebounds,player_assists,player_threes,player_double_double,player_blocks,player_steals,player_turnovers,player_points_rebounds_assists,player_points_rebounds,player_points_assists,player_rebounds_assists",
      label: "basketball_nba"
    },
    {
      markets: "batter_home_runs,batter_hits,batter_total_bases,batter_rbis,batter_runs_scored,batter_hits_runs_rbis,batter_singles,batter_doubles,batter_triples,batter_walks,batter_strikeouts,batter_stolen_bases,pitcher_strikeouts,pitcher_record_a_win,pitcher_hits_allowed,pitcher_walks,pitcher_earned_runs,pitcher_outs",
      label: "baseball_mlb"
    },
    {
      markets: "player_points,player_power_play_points,player_assists,player_blocked_shots,player_shots_on_goal",
      label: "icehockey_nhl"
    }
]

export const player_prop_choices = {
  //football
  "player_pass_tds":"Pass Touchdowns",
  "player_pass_yds":"Pass Yards",
  "player_pass_completions":"Pass Completions",
  "player_pass_attempts":"Pass Attempts",
  "player_pass_interceptions":"Pass Interceptions",
  "player_pass_longest_completion":"Pass Longest Completion",
  "player_rush_yds":"Rush Yards",
  "player_rush_attempts":"Rush Attempts",
  "player_rush_longest":"Longest Rush",
  "player_receptions":"Receptions",
  "player_reception_yds":"Reception Yards",
  "player_reception_longest":"Longest Reception",
  //basketball
  "player_points":"Points", //also covers hockey
  "player_rebounds":"Rebounds",
  "player_assists":"Assists", //also covers hockey
  "player_threes":"Threes",
  "player_double_double":"Double Double",
  "player_blocks":"Blocks",
  "player_steals":"Steals",
  "player_turnovers":"Turnovers",
  "player_points_rebounds_assists":"Points + Rebounds + Assists",
  "player_points_rebounds":"Points + Rebounds",
  "player_points_assists":"Points + Assists",
  "player_rebounds_assists":"Rebounds + Assists",
  //baseball
  "batter_home_runs":"Batter Home Runs",
  "batter_hits":"Batter Hits",
  "batter_total_bases":"Batter Total Bases",
  "batter_rbis":"Batter RBIs",
  "batter_runs_scored":"Batter Runs Scored",
  "batter_hits_runs_rbis":"Batter Hits + Runs + RBIs",
  "batter_singles":"Batter Singles",
  "batter_doubles":"Batter Doubles",
  "batter_triples":"Batter Triples",
  "batter_walks":"Batter Walks",
  "batter_strikeouts":"Batter Strikeouts",
  "batter_stolen_bases":"Batter Stolen Bases",
  "pitcher_strikeouts":"Pitcher Strikeouts",
  "pitcher_record_a_win":"Pitcher to Record a Win",
  "pitcher_hits_allowed":"Pitcher Hits Allowed",
  "pitcher_walks":"Pitcher Walks",
  "pitcher_earned_runs":"Pitcher Earned Runs",
  "pitcher_outs":"Pitcher Outs",
  //hockey
  "player_power_play_points":"Power Play Points",
  "player_blocked_shots":"Blocked Shots",
  "player_shots_on_goal":"Shots on Goal"
}

export const team_prop_choices={ 
    "totals":"Total",
    "spreads":"Spread",
    "h2h":"Moneyline"
  }

  export const state_bookmakers = {
    "All": new Set(["barstool", "betmgm", "betrivers", "circasports", "draftkings", "fanduel", "foxbet", "pointsbetus", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "Arizona": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "Colorado": new Set(["barstool", "betmgm", "betrivers", "circasports", "draftkings", "fanduel", "foxbet", "pointsbetus", "superbook", "williamhill_us", "wynnbet"]),
    "Connecticut": new Set(["betrivers", "draftkings", "fanduel"]),
    "Illinois": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us"]),
    "Indiana": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "unibet_us", "williamhill_us", "wynnbet"]),
    "Iowa": new Set(["barstool", "betmgm", "betrivers", "circasports", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Kansas": new Set(["barstool", "betmgm", "draftkings", "fanduel", "pointsbetus", "williamhill_us"]),
    "Louisiana": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Maryland": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Massachusetts": new Set(["barstool", "betmgm", "draftkings", "fanduel", "williamhill_us", "wynnbet"]),
    "Michigan": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "foxbet", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Mississippi": new Set(["betmgm"]),
    "Nevada": new Set(["circasports", "superbook", "williamhill_us"]),
    "New Hampshire": new Set(["draftkings"]),
    "New Jersey": new Set(["barstool", "betfair", "betmgm", "betrivers", "draftkings", "fanduel", "foxbet", "pointsbetus", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "New York": new Set(["betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Ohio": new Set(["betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Oregon": new Set(["draftkings"]),
    "Pennsylvania": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "foxbet", "pointsbetus", "unibet_us", "williamhill_us"]),
    "Tennessee": new Set(["barstool", "betmgm", "draftkings", "fanduel", "superbook", "williamhill_us", "wynnbet"]),
    "Virginia": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "unibet_us", "williamhill_us", "wynnbet"]),
    "Washington DC": new Set(["betmgm", "williamhill_us"]),
    "West Virginia": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Wyoming": new Set(["betmgm", "draftkings", "fanduel", "williamhill_us"])
  };

export const bookmaker_links={ 
  "barstool":"https://www.barstoolsportsbook.com/",
  "betmgm":"https://sports.betmgm.com/en/sports",
  "betrivers":"https://betrivers.com/?page=landing#home",
  "circasports":"https://www.circasports.com/",
  "draftkings":"https://www.draftkings.com/",
  "fanduel":"https://sportsbook.fanduel.com/",
  "foxbet":"https://www.foxbet.com/",
  "pointsbetus":"https://pointsbet.com/",
  "superbook":"https://co.superbook.com/sports",
  "unibet_us":"https://unibet.com/",
  "williamhill_us":"https://www.williamhill.com/us/",
  "wynnbet":"https://www.wynnbet.com/"
}

export const bookmaker_names={ 
    "barstool":"Barstool",
    "betmgm":"BetMGM",
    "betrivers":"BetRivers",
    "circasports":"CircaSports",
    "draftkings":"DraftKings",
    "fanduel":"FanDuel",
    "foxbet":"FOX Bet",
    "pointsbetus":"PointsBet",
    "superbook":"Superbook",
    "unibet_us":"Unibet",
    "williamhill_us":"Caesars",
    "wynnbet":"WynnBET"
}

export const team_codes={
    "Over":"O",
    "Under":"U",
    //mlb
    "National League":"NL",
    "American League":"AL",
    "Arizona Diamondbacks":"ARI",
    "Atlanta Braves":"ATL",
    "Baltimore Orioles":"BAL",
    "Boston Red Sox":"BOS",
    "Chicago Cubs":"CHC",
    "Chicago White Sox":"CHW",
    "Cincinnati Reds":"CIN",
    "Cleveland Guardians":"CLE",
    "Colorado Rockies":"COL",
    "Detroit Tigers":"DET",
    "Houston Astros":"HOU",
    "Kansas City Royals":"KC",
    "Los Angeles Angels":"LAA",
    "Los Angeles Dodgers":"LAD",
    "Miami Marlins":"MIA",
    "Milwaukee Brewers":"MIL",
    "Minnesota Twins":"MIN",
    "New York Mets":"NYM",
    "New York Yankees":"NYY",
    "Oakland Athletics":"OAK",
    "Philadelphia Phillies":"PHI",
    "Pittsburgh Pirates":"PIT",
    "San Diego Padres":"SD",
    "San Francisco Giants":"SF",
    "Seattle Mariners":"SEA",
    "St. Louis Cardinals":"STL",
    "Tampa Bay Rays":"TB",
    "Texas Rangers":"TEX",
    "Toronto Blue Jays":"TOR",
    "Washington Nationals":"WSH",
    //nba
    "Atlanta Hawks":"ATL",
    "Boston Celtics":"BOS",
    "Brooklyn Nets":"BKN",
    "Charlotte Hornets":"CHA",
    "Chicago Bulls":"CHI",
    "Cleveland Cavaliers":"CLE",
    "Dallas Mavericks":"DAL",
    "Denver Nuggets":"DEN",
    "Detriot Pistons":"DET",
    "Golden State Warriors":"GSW",
    "Houston Rockets":"HOU",
    "Indiana Pacers":"IND",
    "Los Angeles Clippers":"LAC",
    "Los Angeles Lakers":"LAL",
    "Memphis Grizzlies":"MEM",
    "Miami Heat":"MIA",
    "Milwaukee Bucks":"MIL",
    "Minnesota Timberwolves":"MIN",
    "New Orleans Pelicans":"NOP",
    "New York Knicks":"NYK",
    "Oklahoma City Thunder":"OKC",
    "Orlando Magic":"ORL",
    "Philadelphia 76ers":"PHI",
    "Phoenix Suns":"PHX",
    "Portland Trail Blazers":"POR",
    "Sacramento Kings":"SAC",
    "San Antonio Spurs":"SAS",
    "Toronto Raptors":"TOR",
    "Utah Jazz":"UTA",
    "Washington Wizards":"WAS",
    //nhl
    "Anaheim Ducks":"ANA",
    "Arizona Coyotes":"ARI",
    "Boston Bruins":"BOS",
    "Buffalo Sabres":"BUF",
    "Calgary Flames":"CGY",
    "Carolina Hurricanes":"CAR",
    "Chicago Blackhawks":"CHI",
    "Colorado Avalanche":"COL",
    "Columbus Blue Jackets":"CBJ",
    "Dallas Stars":"DAL",
    "Detriot Red Wings":"DET",
    "Edmonton Oilers":"EDM",
    "Florida Panthers":"FLA",
    "Los Angeles Kings":"LA",
    "Minnesota Wild":"MIN",
    "Montreal Canadiens":"MTL",
    "Nashville Predators":"NSH",
    "New Jersey Devils":"NJ",
    "New York Islanders":"NYI",
    "New York Rangers":"NYR",
    "Ottawa Senators":"OTT",
    "Philadelphia Flyers":"PHI",
    "Pittsburgh Penguins":"PIT",
    "San Jose Sharks":"SJ",
    "Seattle Kraken":"SEA",
    "St. Louis Blues":"STL",
    "Tampa Bay Lightning":"TB",
    "Toronto Maple Leafs":"TOR",
    "Vancouver Canucks":"VAN",
    "Vegas Golden Knights":"VGK",
    "Washington Capitals":"WSH",
    "Winnipeg Jets":"WPG",
    //nfl
    "Arizona Cardinals":"ARI",
    "Atlanta Falcons":"ATL",
    "Baltimore Ravens":"BAL",
    "Buffalo Bills":"BUF",
    "Carolina Panthers":"CAR",
    "Chicago Bears":"CHI",
    "Cincinnati Bengals":"CIN",
    "Cleveland Browns":"CLE",
    "Dallas Cowboys":"DAL",
    "Denver Broncos":"DEN",
    "Detroit Lions":"DET",
    "Green Bay Packers":"GB",
    "Houston Texans":"HOU",
    "Indianapolis Colts":"IND",
    "Jacksonville Jaguars":"JAX",
    "Kansas City Chiefs":"KC",
    "Las Vegas Raiders":"LV",
    "Los Angeles Chargers":"LAC",
    "Los Angeles Rams":"LAR",
    "Miami Dolphins":"MIA",
    "Minnesota Vikings":"MIN",
    "New England Patriots":"NE",
    "New Orleans Saints":"NO",
    "New York Giants":"NYG",
    "New York Jets":"NYJ",
    "Philadelphia Eagles":"PHI",
    "Pittsburgh Steelers":"PIT",
    "San Francisco 49ers":"SF",
    "Seattle Seahawks":"SEA",
    "Tampa Bay Buccaneers":"TB",
    "Tennessee Titans":"TEN",
    "Washington Commanders":"WAS"
}

