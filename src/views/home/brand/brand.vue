<template>
  <div class="container">
    <table class="table" @click="toDetails">
      <tr class="tr">
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/i2/2/TB1nJxqJXXXXXchapXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3536741270,233494282&fm=26&gp=0.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3057471253,2387528173&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/i2/2/TB1R1K4GFmWBuNjSspdSuvugXXa.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="   https://img.alicdn.com/i2/2/TB1123WLXXXXXX3aXXXSutbFXXX.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="  https://img.alicdn.com/i2/2/TB1G5bXD9BYBeNjy0FeSuvnmFXa.jpg_125x125q100.jpg_.webp"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/i2/2/TB16oQ2IVXXXXXuXXXXSutbFXXX.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://img.alicdn.com/i2/2/TB1gWINIVXXXXbbXFXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/i2/2/TB1AN1zJFXXXXcfXpXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="  https://img.alicdn.com/i2/2/TB19G0VQVXXXXadXXXXSutbFXXX.jpg "
          />
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1717531514,2891835344&fm=11&gp=0.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3734828398,3778743486&fm=26&gp=0.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://img.alicdn.com/i2/2/TB1pRaOIFXXXXXmXpXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2114400075,1741343956&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="  https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=644164808,3540661692&fm=11&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/i2/2/TB1aXJ9IXXXXXbjXFXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8AAEQgA+gD6AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPMNZ/aj+HejfFDUvg9a6N4h1XX9KgSe9tNH0SS58uJo43DZXtiWPPu1XP+GhbD/okfxB/8I+evJPhb/wApRfiR/wBiXb/+itLr6er5fKcVmeaKvN1VFQq1IJKN9ISaW73tuerjKOFwns4qLfNCMnr1aTZhax448NeG/CD+OvFeorpOnRWyz3E2pfujbqwGA4PKtk429c8VxelftD6h4tsBr3gb4D+NtY0dslNSEFnaCePtJDHdXEcsint8q157/wAFKrjVNM+FPhrWzprXmi2HjC2m1+zXOJYlV9qP22Fvl5/iZa9n+F/xg+G/xg8Px6/8OfFFpqFuYgzRQygSwZ/gkj+9Gw9CKazGtic7qZcqvs3TjGWy5p817tc11yxtZpJu73Wl19VhSy+GKcOfmbXW0bW3tZ3d76tejKHhT47+FPF1rq6WOj67b6roUAl1Pw/d6NLHfIp3bNsZGJd2xtpQkGszVv2l/DugaVc67rPww8dWdnZW7z3V1P4TmWOKJQWZ2J6AAZNeleVD5v2jyl8zbjft5x1xmuN/aR/5N58e/wDYl6r/AOkktd2LjmWHwMqiqrmhGT+De12rrm9L238tlhReGqYiMHDSTS32vZdvuOe8J/tZ+CPHehx+JfBngPxtqmnzFliu7LwtNJG5UlSARxwRWl4/+Jvg0/BPVfHnjS18T6FpFugF4BFPYahEPMVQU2Mrrkkcqelcb/wTk/5NP0H/AK/L7/0pkrZ/bm/5NK8Y/wDXlD/6VRV5FDH5hW4VeZVZxblQc+XlsruHNbe7XTzOyeGw0M3WFhFpKoo3vrbmt95xnh/V/hV4s0a28Q+Gbf48X1hdwiS2vLbWtadJV9QRcc13XwVi8PReKpm0jTPijDJ/Z77m8aXuoy2hXenCi5kZfM6YwM43e9T/ALGP/Jrvgj/sCr/6G1eoVvk2Xe1w1DFy5U5RjKyglvFOyd33IxuJ5alSir2Ta1lfZ22seY+Jv2pfhx4X+J8/wefS9e1LxBb26zvZaPo73DGNkD7ht9Aeat/8NC2H/RI/iD/4R89eMaX/AMpVNR/7Fcf+kcNfVVLKMXmeayxMnUUVTqzppKN9ItWbu9wxlDC4NUkot80IyevV+iKGh6suuaNbaulldWouYVkFveQGKaLIztdDyrDuKv0UV9RCLjFJu55Ts2cJ8Lfj58PPjB4j8ReG/BtzcvdeFrxbXVhcWpjCyM8qDaT94Zhkru6+VP8Agnn/AMlk+OP/AGNEP/pTf19V14fDOY4jNsmhiq9uaTmtNF7s5RX4JHfmmFpYLHSo09ko7+cU3+LCvNfip+1D8Kfg3490L4ceNL65TUdedPs5hiUx26PII1kmYsNiFt3PP3Wr0aaaO3jaaZwiICXdmwAB3NfIfjr4RTftQfA34h/HprJ5dS1bU/tngsMp3pp2nb4ogoPKmVftDY7l1NZcR5jmGCw6jgIqVZqUrNX92CvL5t8sV5yv0LyzDYavVbxDahorrvJ2X3at+SPsCuJ8ffHPwF8OfHPhv4eeJbm5TUfFNwYNISK2LozBlX5m/h5daw/2QvjAPjb8A9F8XXl55mpQRGx1jJ5+1QgK7HHdxtk/7aV5p+2F/wAna/A7/sNP/wCj7eozLPHHIqeY4SzU3StftOcU/mk/kx4XAKWYSwtfRxU7+sYtr8V9x9O1z3xK+Ifhv4VeCdQ+IPi+WVNO02JXumgi8xwGcIMKOvLCuhryH9ub/k0rxj/15Q/+lUVetm2JqYLKq+Ip/FCEpK+14xbX5HJg6UcRjKdKW0pRX3tI6z4zfGrwR8CPCS+NvH89xHYPeJbBrW3Mr+YwYj5R2wprIs/2jtGv7WO+svhV49lhmiEkMsfhKYh1IyCD7ivN/wDgqP8A8m22/wD2M9r/AOi5691+HP8AyTvQf+wLaf8Aola8iONzDE8Q18DCajCEISXu3bcua99fJHW6GGpZbTryi3KUpLe2iS/zOP0r9qb4R3XieHwX4ivdR8N6vcki1sfFGkzWDXHOPkeVQjZPTDc16ZXEfHT4MeFfjt8PL7wH4otInaaJmsLp0y9pcbTslUjkYPX1HFeZf8E7vix4i8d/CK98FeNJWk1XwfqJ06SWZ8u0GMx7z6riRPpGta08yxmDziGAxdpKqpOnNJxu42coyV3rZ3TTs1fRNEyw1GtgpYmhdcjSkm777NOy66NdNNTqvD37Xfw78ZXWoWvg7wp4t1j+y71rW+fTPDksyRSqSNpK/StvT/jxZajqFvpy/C3x1CZ5Vj8648LTJHHuONzMfugdzXkP/BNzp8Tf+x2f/wBnr6drDIMVmmb5XTxc6qi5X0UNNJNdX2RpmNHCYLGToxg3a2t+6T7eZwnxs/aA+H3wFsdO1Hx9NeKmqXRt7MWdqZWaQLnBANF18cIrOAzzfCjxyQO0fh1pD+SsTXiH/BUX/kXPAf8A2NB/9AWvqqrw+Nx+NzvGYSM1GNJU7e7d+/Ft3u+60JqUMPQwFGs43c+a+v8AK0kcP8M/jz8MvixdXWkeEvED/wBpad/yENGv7WS1vLU5wfMhlCtweCRxXcV8s/FRYb3/AIKReB18AbjqttohPiprX7i22JcCbHfYV6/3of8AZr6mrpyPMcRj/rFOtZyo1HDmjfllZJ3s27NXtJXdmjLH4anh/Zzhe04qVnutWrdO11psz5G0TwF4Y+If/BS34haN4rsZbi3j8KW86LDeTQEOIdNUHdEynozcZxXu8P7MPwVt5Uni8N3odGDKT4gvjyPrPXiVvrF18LP+Chfjv4j+KvB3iKTRL7w1BZ2l/p3h65u45ZjDYNtBijb/AJ5Sfitewf8ADWPwz/6F7xr/AOELqX/xmvmcjeRUnivrqpqft6z95RvZzdt1e3Y9XHrMJqi8O5cvs4bXtflV9j0DWtE0bxJpU+ieIdMt76yuojHc2l3EskcqHqrK2QRXzr49/wCCa/w1u9Q/4Sj4KeMtW8F6tE/mW/2W4eaCNh/dyyypz3EnHpXr3jP4wnwh4d0fxlZfD3xHrGlakFe6fStNaS60+NkDrJJbECXHOGGNyY6VmN+1p8B/sf2i28YXM0jcJZQ6JeNdM390Q+Tvz9RXuZvS4XzO1PMOS8VdOT5ZJPW8ZaO3nF26PU8/AzzfC+/huaz3tqvmtV96PK/2Z/jB+0B4F+O0v7K37RlyNUuzYNc6JrSnc0sagtkvgGSNlSTDMN4ddp/2fbP2kf8Ak3nx7/2Jeq/+kktec/CjwD43+KX7RVz+1P4+8LXXh+xstGGl+EdEv0C3hhO8vPOoJ2Z8yTCdfm/2fm9H/aEs7u/+AvjbTtPtJbi5ufCOpxW8EEZZ5JGtZAqKBySScAe9ceUUsZT4exMKkpSjep7NzvzOnb3b31et7X15bG+MnQlmdKUUk/d5uXbmvrbp2vbS9zz3/gnJ/wAmn6D/ANfl9/6UyVs/tz/8ml+Mv+vSH/0pirP/AGAdA13w1+zBouj+I9Du9Ou0u70va3ts0Uig3MhGVYA8itb9tLSNW179mDxZo2h6VPe3U9pCILW0gaSSQi4iOAqgk8A/lUYWE14eqFnf6ta3W/s9rDqyj/rI3fT2u/8A28ch+yp+z58KPE37O/hPxBrXh+6lu7vSFed01u8jVm3N/CkoVfwFev8Agf4TeCfhxJcy+DtKntmu1QTmbUp59wXOP9a7Y6npXjv7Nvx58K/Dn4GeGfBPizwj4yt9S07TRDdwp4L1CQK4JONywkHrXqXgT46eD/iNrTaBoeleIoJ1gaYvqnhi8tIsKQD+8miVc8jjNbcP1MghgsMoezVXkitFFSvyq6737kZnHMpV6rlzOHM+rta/5Hzvrvg3w/47/wCCnOqeHvE1pLPbHw2khSK7kgO5bSLHzRMrfrXv3/DL3wS/6Fm8/wDCgv8A/wCP14Z4lvNT+Hv/AAUS1L4n674R8QTaH/YKQDUNN0K5ukaQ20ahR5SNnkV7N/w1j8M/+he8a/8AhC6l/wDGa8rI/wCw6dXG/XlT53iKrXOo3tdW3V7djtx/9oThh/q7lb2UPhva/wAup6XFDHBCsEYwqKAB14H1qSs3w/r9n4l0S11+wjnSC8t1liW6tXhlVSMjcjgMh9iK0q/QqcozgnHZnzTTTsz5U/4J5/8AJZPjj/2NEP8A6U39fVdfHn7Kniub4G/F34sX/wAQ/BPiq3h1zxEsmmTWnha8uFnWOe8LMDHEwxiWPHrXukP7VPw2uJ0t4/D/AIyBkYAF/A+oqOeOSYa+I4PzLAYPIKdCvVjGalU0bSetWbWj11Wp7+d4XEV8ynUpwck1HVLT4Ioz/wBsPxdrmnfCtfh14HZW8R+Ob5NC0hN2Nom/10pxyqLFuy38O5TVjwjP8evBPhXT/B2g/ATwxHY6XYxWlrGfH8n+rRQoz/xL+uBzWdo2i658Sv2udQ8Z6zpFzDongHShp/h97q1KJdX9yM3FxEWHzBY18knp6V7RXq4XD18wx9bGqpKCv7OFlHWMHq/ejLefNtuoxfY46tSnhsPChyqX2ne+8lps1tG2+zbPjr9lHUfEH7O37V/iP9n/AMaaNb6VaeLF/tHRLK3vTPDDJ87pHHIyR718vzIy20ZaBRXUftg/8nb/AAN/7DMn/o+3p/8AwUH+Fvi+7g8K/Hz4WaNc3fiLwnq0YMdjatLLLCXDo21QSwSVenpI1af7S3wy8bfHTwN4H+PHwp0h7fxT4Ymi1Wy0bUFMTyh/Lke3ZW2/vFaNeDjOGX+KvkKmExmEy3GZPCEp+xnTq09PipucZuMbKzcWpKytfRJHtQrUa2JoY6TUeeMoS8pqLim9dmmtfU+h68h/bn/5NL8Zf9ekP/pTFU/hn9rT4Yalp0aeNotU8K6qfkutH8QaRcQyxSDqFby9rjPRgfyrC+IV/q/7Uj2Pw08H+G9St/B39oW934n8Ratpslst5DDKJFtLWOZVeUvIg3S42Iqfxbq+uzXMsFmOUVsPhZqc6sJRjFO7vJNK63ilf3m7cqvc8XCYavhsZCpWi4xhJNt7WWuj2bfS25hf8FR/+Tbbf/sZ7X/0XPXuvw5/5J3oP/YFtP8A0SteLf8ABSbw34i8Vfs8xaT4Y8P3upXK+IraQ22n2rzSbAkoJ2oCcc11fg39ov4eaP4N0nSZ9N8WPeW2m20ElrD4D1ZmMixopAP2bB5964KOJw+D4wxc68lBOnSSbaV2nO6XdrqdE6VSvklFU05NTneyva6jvbY9ZZgoya+V/wDgm7bHV/EHxV+Idhj+zdZ8Vqti6/dbY9xKcH/cuI67T4h+N/jh8ctHuPhz8GPhvrHhuz1KIw6n4v8AFlqbI2sLcOILdj5ruVyAxC4/WvQ/gf8ACDw18Dfhxp/w38K7ngs0LT3UqgSXMznLyt7k9uwwO1dNSMs4z/DYikn7LDqb5mmlKU48qUbpXSV25LS9kru5mmsFl1WlNrnqcqsmnaMXe7ts27WW/Vnzb+w18JPAfxGuviJf+LtInuJLbxfJHE0OqXEGAS5PETqD+NfRnhv4A/CzwprcHiTQNCu4Ly1YmCR9avJQCQVOVeVlPB7ivnv9j7xynwOvPHdj8RfA/iy2fVPFUlxZNa+Er2dZYwXGcxxEV7fY/tSfDrULyGyg8PeMQ80qxoZfBGoqgLHAJJhwB714/Cksho5PRWI9mqqcr8yipJ87tvr2sducRzKpjansuZwstm7W5Vc8f/4Klx+f4a8Cxb2Td4mZd6dVzGORXW/tGfBH4w6d8JdU1b4P/HTxxNrNnGbgWdxqyE3USgl40McaMsmOVweSu3+KsL/gpH4T8U+KtC8ExeFvDV/qLW/iMvcLYWTzGJdg+ZtgOBX07XRTyqnmWf5pTq80VKNJKSbTV4S1TTWqZnLGTw2WYSULOzm2nZp+8tGjw/8AYd1D4OeKvhFD43+G3ha2sNTu38vxOTK010bxeX8yaVmkdWJ3ruPR/XNe4V8q+IfCXjH9kn9qRPiF4A8LalqPgTxy+3xFYaTYS3H9nXAbJl2Rg4UFt6+zSIP4a+qq9fhivU+pywVaChVoPlkkrRl2nFbWmtfJ3RxZrTi66rwleFTVXd2u8X1vF6elgooor6U8sKKKKACiiigAoorzv4r/ALRfgX4PaxbaD4m0fXrma5tvtEb6ToktzGF3FeWQYU5HSubFYvDYGl7WvNRj3fnsaUqNWvPkpq77I9EoryDwD+2h8H/iN4vTwPoFr4gjvixFwb3RJIY7X5GfMzNxECFbGawPC37Ymsap4V8MfEbWvhY8PhjxJ4ln0n+2bW+Lm1QSmO3naEoDsd1YHB+Xb6kLXl/6y5I0nGspJ31jeSVnFO9k7JOcbt6K93omdf8AZePTacGmrb6bptWvvdJnv1FFFe6cAUVxNl8afBN18Xbr4KXUl5Za5BZrd2iX1sYotQjIyxt3P+t2Y+bHv12ttseN/jN8L/h7NNpviv4j+H9L1BbUzRWGp61DbyuuDtIV2DYJGM4ri/tHBeylUdSPLFtN3WjW6fn5G31evzqPK7tXWnR9TrqK8j+BX7V3w2+KfgXQtV8ReOvDOl+INX+R9AGuw+ekxmaNIxGz7yW+XAxk7q9cp4HH4TMcPGth5qUWk9OzV1fs7dGFfD1sNUdOrGzWn3du/qFFFcR4A+NPhL4h+K/EPgXT4ruy1jw1d+Rf6bqUIilKH7k6AE74W7N/iM61MTQo1YU5ySc21Fd2ley87akRp1JwlKKuo7+XT8zt6K5P4v8AxX8L/BTwLdePvFplNtbMiR29sgaa4ldgqRxqSNzknpXSWsxuLeOcxNGZEDGKThlyM4OM8iiOIozryoqS54pNrqk72b9bP7gdOapqbWjuk/S1/wA0WKKK8w+Pn7QNt8I00/wx4Y0uLW/F+uXSxaL4fSfaXXPzzykZ8qJVDEufT0DFYxuNw+Aw8q9Z2iv+GSS3bb0SWreiKo0auIqqnTV2/wCvu7s9PorxLxD+2Z8P/Cnxff4ea5rugR6e3hk39pq8WuxvG94shU2jsOIjgcE9f/Ha5vwB/wAFIfg1ry3em+O7G50HUbV1EdtZM2qQ3YbOTDNbp82AMneqde5DY8ifFfD1Ov7KpiIxldrXRXjum2rLfS797pc7FlGZSp88aTasnp2flv69up9I0VmeG/ENj4n8PWXibTBKLbULWO4gWeIpIquoYBlblTg8g9K069+E41IqUXdPVHntOLaYUUUVQgooooAKKKKACiiigAooooAKKKKACvnr9uH4peFfBerfDrw14u8SNpen3Xi6PUtUuo4pXItLQZZCIgW+dpEXgV9C15p+1d8R5Phn8ENYvNM3Pq2rJ/ZWgW0PMk95cAxxqg7kZZ/+A14nEcHLJqz51Cyu21zK0WpNWUot8yXLo1ud2WO2Pp+7zXdrXturXvZ7Xvt0PkrxJ+0faa34/wDi3pPwQ1VL27+I95plppV66S24S0itLgXUw3qpUgfJzg/Nkbttc7AP2VLX4UfDhrfxfcx6/N4osE8cQR6heKIdPYy/aSAPlXA8v/V8+le1/sseBF+F+s/HD4fBlZ9J8O6NbzOvR5V0243sPq+4154vjXx//wAKM+Demj9nif7Jp/jbSZ9N1f8AtK3xrUqmbbbBcbkMmW5fgbea/GK2GxLw6xGMcXKare66UpqDWItLl5W7NycnzS3Vob2Z91CrSVV06CaS5NVJRcr0tL3WuiWi63kfTf7K2hfs52emax4g/Z11ue+s7qeK31KaW8upgJIgzKo+0HIwJT045r0vxNr0Phrw5f8AiGayublNPs5bl7ayhMs0gRSxSNB99zjAXua574OeKPF3inRLq78X/B6XwbPHdbIrCW8hmMy7FPmZiAA54/4DXa1+2ZVRjDK4QpJRVnblg4JNtu6py1jr0Z8FjJyli5Snd+rUn/4EtGeGeG/i18Ef2h/jBoWh6p8NvFGn+IvD0MuraNNr2ktZMijbG5B35dSXXjGMrWb8Y/iH8L9W8Tappnir9iXxp4n1KzR7KHXl+G0F7FKFyFMU7sWaPJ3CtvXf+T+tD/7Jldf+lq1x/j/xJ+0h4B+I2i/D/wASftQWlg/iaWRNJvpPh9CbNZN2Et2mMn+sOeBj643LXyWLxOIhg6qrLmftXCUowp2dowUXJVJxV9Uk03t0PZo0qUq8PZ6Lkuk5S01bdnGLdtLtaHFfs8+Mfht8MvA+g+FvGv7D/jS+8Y6PF59xqlr8NYZbnzBOzxTLI5WXj5cOQMFa+w9Mvxqemwah9jmgM0CyeRcptkjyAdrDsw7ivlLS/AP7Trftc6pokfx80xNfTwNBLPrX/CKxFHtTdYEAh3YUhud9fUnhe01vTfD1jYeJNUS/1CGziS/vo4BEtxMEAeQIOEDNuOO2cV2cHfWadCpQnCUY03yK8acfg93Vwk25WWt9OzZhnnspVI1IyTcvednJ766cyVl6fcin8Q/F2peCPDj69pXgXVPEEyyIi6dpCRmYg9W+dlGB35rwLx54h8ceI/i34Y+Mvhf9mz4g6PrGiSvDqcsdhaONT09gc2zj7Qv8X3WP3PvYb5a+kNauNUt9IubjRLNLi8SB2tLeWTYssgUlULYO0E4Ga8w/4Tz9sP8A6N78Mf8Ahbf/AGiu/PaPt5RhUqVFHRpQpudnFpp8yjJp389vmc+XVPZpuMIt6p80+XRq1rNpP8Tzrxv4i+I3xE+M2hfEDxj+zx8QLjQPDUX2jSfDK6daKv8AaWeLqWT7Qd+1fujHB/4Fu9w+F/xM1/4hm+Gt/CfxB4XFmIvKOvJEPtW7fnZ5cj/d285/vLXKf8J5+2H/ANG9+GP/AAtv/tFd38PtV8fav4aS7+I3hWz0fVDKweystR+1Rqo+62/auc/Ss8npcmNnKNWq3N80uek4puyS95wWyStFP0W5WOnzUIqUILlslyzvbq9FJ763bOir42+Mfgz4afs0ftHeEfGzaR4w8U3U1rrmo+J5lT+0Lq5tJbcwICWdAscQZssf4Opr7Jr5U/axT4qav8b7XXfhx4S8bWtxoekyaeNT0vwRbaraX8VwqSOB58yrgZ2HKnlWrLjWlB5bTrKHNUhODjaKk01JSbSbSvaPVq6ur6mmRSl9alTcrRlGSerSejVm1d9eif4HJeOPGv7Inj7wlYeHNG/ZD8e6LPrMhm8M6x4e8E20N1PLGN26B1lzcADqnzLj/gJrN8E/tOftM+HfEtl8J/A6PN9s1eLRobzx14EGmG1uXX5EmNtM37wIVfkEsvO2vP5fC/xv+HniTwt4e0ZvHenvJq2oXOkQv4BtraWGeaALObWJbhg5KDlMoI+qc11fw3+Hvxe8Cat4fnvvBfxK1LS9D8SR64dP/wCFa2sMl1dLnLvcC6aRiQzD5y+PSvyylmGa4jGKUKc6U04xm6ajBWtFtNRkr/FJp2bStbV6fXTw2Dp0LSlGaabSk3LvtdabLrZu/bX7N+CHgXX/AIafC7R/BPirxXca3qNjbEXmpXU7ytLIzMxwzkttXOxc/wAKiuyqG0mNzbxzmJoy6gmN+q5GcGpq/fcNQp4bDxpU/hiklrfRKy1er9T85qTlUqOct27v5hRRRW5AUUUUAFFFFABRRRQAUUUUAFFFFABXlPj/AODGv658WB8atQvh4hj8M6S8ng7wa223iXUChzI8zbgXYhVVyPkz/s/N6tRXJjMFQx1NQq7JqS9Vs7bOz1SaaulobUK9TDz5odVb5Pf0utLqzt1PAfg58MvixJrPxb+I3jzwMug3njiG3j0vQm1aG6kTybaWPLSxHZ8xkXH92uI8M/ssftZav8LvBXhjXviJ4d0mPwlqdrqumaXNpvmy2t1bl/LWSSNmWUDe2cHFfWtFeFLhPL6lKEKlSo1Hnv73LzOc/aScuRR+1slZLsehHOcVCTcYx15el7cseVWvfp8/M4P4S6H8eNInvm+M3jvRNajkWMWCaRpTWxjI3bi2Sd2flxXeUUV9BhsPHC0VTjKUrdZNyf3u7PNq1HVqObSV+ySX3I8L+M37N3xX+Jvx8s/iD4a+LC+F9Hh8M/2ZdXGlxN/aLq0zSOkbH5Y8/L+8Ugr6NXT+NfgB4O1b4Ep8J4/D8mtQ6TbrPpNvfak8Us91ETIha4UbkLvlWcDpI1em0V50chy5VK83G7rX5rtvR2ukndJaLRLor3sdLzDFONON7KFrW0281q/vPDfgp4T+NfiH9oHWvjV8V/hnD4Vgl8MQaPZaeuuxX7zFZjIZd8XRfrg17lRRXVl2Ahl1B01OU225OUrXbk7v4VFfckZYnESxNRSaSskkleyS9W3+JxPxb/4aA+zWX/Ch/wDhD/N3Sf2l/wAJd9q2bcDZ5f2fnOc53Vxn/GxH/qjH/lWr2miscTlf1ms6nt6kb9IysvusXSxfsqaj7OL82rs8W/42I/8AVGP/ACrV0Hwv/wCGsf8AhJT/AMLq/wCFe/2P9lbZ/wAIx9u+0+dkbf8AX/Lsxuz3r0miooZR7CtGp9Yqu3Ryun6qxU8ZzwcfZwV+qWoV8p+DP2H7Lxp8S7rxZ8SPg54b8MeHrcTxW+g2Goy31xfuxytxJPvAQA/OqqB1wRX1ZRTzPJMBnE6TxUeZU3dJpNN6b3V7abJpP7V9BYXHYjBRmqLs5K19br01tfzabXSx8seDP+CfOi2dt4i8KeM/DHhu7XywfDHi6OOYXAZt2VntFlEbbPUMM+/agf8Agn5P4h+GQtLnwd4T8P8AizTdRk8q8s/tF1aatAgwnmo75t9/fZlh7fdr62oryP8AUfhz2ah7FWs102butbXvHZSvzW0baO3+3s05ubn1un16Kz62s+q27JHCfs/eH9c8K/CDRvDfiLwJY+G7q0gZJdG02+NxDCdzElWJY/MSWxubG77xru6KK+nwuHjhcPCjF3UUktuit0SX3JLyPJqzdWrKb3bv9/4/ewooorcgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1007773490,2336701406&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1479896511,777703379&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3104964845,3268032663&fm=26&gp=0.jpg  "
          />
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3154328813,2549888315&fm=15&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1447423149,1925504495&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/bao/uploaded/TB1_b2JHpXXXXcHXVXXSutbFXXX.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/bao/uploaded/TB1KQYNIXXXXXXiXXXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/bao/uploaded/TB1CxrVHpXXXXcjXpXXSutbFXXX.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/imgextra/i1/890482188/TB2X164cV5N.eBjSZFmXXboSXXa_!!890482188.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://img.alicdn.com/bao/uploaded/TB1GAvUKVXXXXa0XpXXSutbFXXX.jpg"
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=313350920,2624447044&fm=26&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src=" https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2916449007,4268075255&fm=15&gp=0.jpg "
          />
        </td>
        <td class="td">
          <div class="shadow">
            <span>提示文字</span><button>点击进入</button>
          </div>
          <img
            class="brand"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2898322806,88096554&fm=26&gp=0.jpg  "
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>


export default {
  name: "Brand",
  methods:{
       toDetails(){
         this.$router.push({
           path:'/GoodsDetail'
         })
       }
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.shadow {
  position: absolute;
  width: 122px;
  height: 78px;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  color: white;
  opacity: 0;
  text-align: center;
  padding-top: 30px;
}
.shadow:hover {
  opacity: 1;
}
.shadow > button {
  background-color: red;
  color: white;
  border-radius: 5px;
  border: 1px red solid;
}

.table {
  border-spacing: 0px;
}
.container {
  // padding-top: 50px;
  padding-bottom: 25px;
  padding-left: 110px;
  background-color: #f5f5f5;
}
.brand {
  width: 122px;
  height: 108px;
}
.td {
  padding: 0;
  position: relative;
}
.brand :hover::before {
  display: block;
  background-color: rgba(15, 20, 26, 0.5) !important;
  color: white;
  width: 130px;
  height: 120px;
  cursor: pointer;
}
</style>
