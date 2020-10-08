module.exports = {
  src_folders: ["tests"],
  output_folder: ["reports"],
  custom_commands_path: "",
  custom_assertions_path: "",
  page_objects_path: ["pages"],
  globals_path: '',
  live_output: true,

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: "./bin/drivers/chromedriver.exe",
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings:{
    default: {
      launch_url: "https://app.xcoobee.net/",
      
      desiredCapabilities: {
        browserName: "chrome",
        marionette: true,
        acceptSslCerts : true,
        chromeOptions : {
        	args : ["window-size=1280,800", "--incognito"],
            "w3c": false
        }
      },

      globals: {
        login: {
          valid: {
            email: "devdtester18@gmail.com",
            password: "testing",
            xbid: "~Test_Freddy"
          },
          invalid: {
            format_email: "asfd@com",
            trailing_email: "test.baba@aol.com ",
            invalidEmail: "auto.qa @example.com"
          },
          freeUser: {
            email: "devdtester18@gmail.com",
            password: "testing",
            type: "Free",
            xcoobee_id: "~test_amd-free"
          },
          businessUser: {
            email: "milton@sjinnovation.com",
            password: "55Newyork",
            type: "Business",
            xcoobee_id: "~Tester"
          },
          campaignUser: {
            email: "black.baba@aol.com",
            password: "testing",
            type: "Free", 
            xcoobee_id: "~test_babablack"
          }
        },

        testdata: {
          beenames: ["Send File", "Simple Message Bee", "Share on Twitter", "Share on Tumblr", "Image Resizer", "Share on Imgur", "Google Drive Upload Bee", "Watermark Bee Basic", "OneDrive Upload Bee", "DropBox Upload Bee", "Contact Bee", "PDF Converter"],
          businessUser: {
            email: "amdv394@gmail.com",
            password: "testing",
            type: "Business",
            xcoobee_id: "~test_amdv-business"
          },
          inboxXcoobeeId: "",
          campaign: {
            name: "",
            newUser: ""
          }
        }

      }

    },
    
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true,
        chromeOptions: null,
        firefoxOptions: {
        	args: [
        		
        	]
        }
      }
    }
  },
};